---
id: default_props
title: Default props
sidebar_label: Default props
---

## What is default props
[Default props](https://reactjs.org/docs/react-component.html#defaultprops) can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null or false props.

## How to use it
For example if `this.props.appearance` is not provided, the default prop would be `BUTTON_APPEARANCE` value. Same happens for `isDisabled` prop. If no value is provided, by default will be `false`.
```
interface Props {
    text: string;
    appearance?: BUTTON_APPEARANCE;
    isDisabled?: boolean;
}

export class Button extends Component<Props> {
    public static defaultProps: Partial<Props> = {
        appearance: APPEARANCE_DEFAULT,
        isDisabled: false,
    };
}    
```

* In case you don't want to provide a default value for all the properties, use [Partial](http://www.typescriptlang.org/docs/handbook/advanced-types.html). Is available in TypeScript 2.1 and it lets you use some of the properties from an interface.

## When to use it
You should always use it when you have default properties.

Some people try to check if the value is undefined, but actually ReactJS already checks this for us. See the example below:
```
// Bad
interface Props {
    currentPage: string;
    limitPages?: number;
}

export class Pagination extends Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        const { currentPage, limitPages } = this.props;

        this.state = {
            currentPage,
            limitPages: limitPages ? limitPages : 5
        };
    }
```

The correct way of doing this is by using `defaultProps`:
```
// Correct
interface Props {
    currentPage: string;
    limitPages?: number;
}

const LIMIT_PAGES = 5;

export class Pagination extends Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        limitPages: LIMIT_PAGES,
    };

    public constructor(props: Props) {
        super(props);
        const { currentPage, limitPages } = this.props;

        this.state = {
            currentPage,
            limitPages: limitPages ? limitPages : 5
        };
    }
```