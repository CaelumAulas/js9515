import Tweet from "../Tweet"

export default function TweetsContainer(props)
{
    return (
        <div className="tweetsArea">
            {
                props.tweets.map((tweet, index) => {
                    return <Tweet
                                key={index}
                                {...tweet}
                            />
                })
            }
        </div>
    )
}