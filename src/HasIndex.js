import React from 'react';
/**
 * Manages state for any component that has an 'index' prop
 * NOTE: replaces `slideIndex` logic
 */
export default (Component, indexPropName) =>
class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${Component.displayName || Component.name})`;
    
    state = {
        index: 0,
    }

    handleDecrement = upperBound => {
        this.setState(({ index }) => {
            const newIndex = upperBound 
            ? (index + upperBound - 1) % upperBound
            : index - 1;
            return {
                index: newIndex,
            }
        });
    }

    handleIncrement = upperBound => {
        this.setState(({ index }) => {
            const newIndex = upperBound 
            ? (index + 1) % upperBound
            : index + 1;
            return {
                index: newIndex,
            };
        });
    }

    render() {
        //[] treats variable input as actual string key value
        const indexProps = {
            [indexPropName]: this.state.index,
            [`${indexPropName}Decrement`]: this.handleDecrement,
            [`${indexPropName}Increment`]: this.handleIncrement,
        }
        return <Component {...this.props} {...indexProps} />;
    }
};