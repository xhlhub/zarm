import React, { PureComponent, createRef } from 'react';
import classnames from 'classnames';
import { AffixProps as BaseAffixProps } from './PropsType';
import Events from '../utils/events';
import { canUseDOM } from '../utils/dom';

export interface AffixStates {
  affixed: boolean;
  width: number;
  height: number;
}

export interface AffixProps extends BaseAffixProps {
  prefixCls?: string;
  className?: string;
}

export default class Affix extends PureComponent<AffixProps, AffixStates> {
  static displayName = 'Affix';

  static defaultProps = {
    prefixCls: 'za-affix',
    scrollContainer: () => (canUseDOM ? window : undefined),
    offsetTop: 0,
  };

  private savePlaceholderNode = createRef<HTMLDivElement>();

  private saveFixedNode = createRef<HTMLDivElement>();

  private saveFixedNodeTop = 10000;

  state = {
    affixed: false,
    width: 0,
    height: 0,
  };

  componentDidMount() {
    // wait for ref not null
    setTimeout(() => {
      const { container, onPositionUpdate } = this;

      Events.on(container, 'scroll', onPositionUpdate);
    });
  }

  componentWillUnmount() {
    setTimeout(() => {
      const { container, onPositionUpdate } = this;

      Events.off(container, 'scroll', onPositionUpdate);
    });
  }

  get container() {
    const { scrollContainer } = this.props;
    const container = scrollContainer!();

    return !container ? window : container;
  }

  get containerRect(): DOMRect {
    const { container } = this;

    if (!canUseDOM) {
      return { top: 0, bottom: 0 } as any;
    }

    return container !== window
      ? (container as HTMLElement).getBoundingClientRect()
      : { top: 0, bottom: container.innerHeight, width: 0, height: 0 } as any;
  }

  get affixed() {
    const { containerRect, saveFixedNodeTop } = this;
    const { offsetTop, offsetBottom } = this.props;

    if (typeof offsetBottom !== 'undefined' && saveFixedNodeTop + offsetBottom >= containerRect.bottom) {
      return true;
    }

    if (typeof offsetBottom === 'undefined' && typeof offsetTop !== 'undefined' && saveFixedNodeTop - offsetTop <= containerRect.top) {
      return true;
    }

    return false;
  }

  get affixStyle(): React.CSSProperties {
    const { containerRect } = this;
    const { offsetTop, offsetBottom } = this.props;
    const { width, height } = this.state;

    if (this.affixed && typeof offsetBottom !== 'undefined') {
      return {
        position: 'fixed',
        bottom: offsetBottom,
        width,
        height,
      };
    }

    if (this.affixed && typeof offsetTop !== 'undefined') {
      return {
        position: 'fixed',
        top: containerRect.top + offsetTop,
        width,
        height,
      };
    }

    return {};
  }

  onPositionUpdate = () => {
    const { onChange } = this.props;
    const { affixed } = this.state;
    const target = this.savePlaceholderNode.current!;
    const { top, width, height } = target.getBoundingClientRect()!;

    this.saveFixedNodeTop = top;

    const currentAffixed = this.affixed;
    if (currentAffixed !== affixed) {
      this.setState({
        affixed: currentAffixed,
        width,
        height,
      });
      onChange && onChange(currentAffixed);
    }
  };

  render() {
    const {
      prefixCls,
      className,
      children,
    } = this.props;

    const cls = classnames(prefixCls, className);

    if (!this.affixed) {
      return (
        <div ref={this.savePlaceholderNode}>
          {children}
        </div>
      );
    }

    return (
      <div ref={this.savePlaceholderNode}>
        <div
          className={cls}
          ref={this.saveFixedNode}
          style={this.affixStyle}
        >
          {children}
        </div>
      </div>
    );
  }
}
