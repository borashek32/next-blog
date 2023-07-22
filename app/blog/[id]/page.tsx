import { Metadata } from "next";

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const post = await getData(id);

    return {
        title: post.title,
    };
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {});
    return response.json();
}

type Props = {
    params: {
        id: string;
    };
};

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
