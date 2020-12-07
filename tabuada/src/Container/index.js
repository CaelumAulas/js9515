export default function Container(props)
{
    return (
        <div className="container p-3">
            { props.children }
        </div>
    );
}