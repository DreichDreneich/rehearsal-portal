import * as React from 'react';
export const cloneReactElement = (el: React.ReactNode, props?: any) => {
    return React.cloneElement(<React.ReactElement<any>>el, props);
}