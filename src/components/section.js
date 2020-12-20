
export default function Section({title="Empty title", children}) {
    return (
        <h4>
            {title}
            {children}
        </h4>
    )
}