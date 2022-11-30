import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            There was an error:{' '}
            <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function AppErrorBoundary(props) {
    return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />
}

export default AppErrorBoundary