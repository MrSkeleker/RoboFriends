import React, {Component} from 'react';

class ErrorBoundary extends Component<{}, any> {
    constructor(props: any){
        super(props);
        this.state = {
            hasError: false
        }
    }

    render() {
        if(this.state.hasError){
            return <h1>Oops, something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;