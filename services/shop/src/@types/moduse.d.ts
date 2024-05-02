declare module '*.scss' {
    const content: any
    export default content
}

declare module 'react-transition-group' {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    export { TransitionGroup, CSSTransition } from 'react-transition-group'
}

declare module '*/Router'
