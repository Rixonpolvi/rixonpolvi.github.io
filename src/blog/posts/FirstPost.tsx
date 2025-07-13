import CodeBlock from '../../components/CodeBlock/CodeBlock';

const FirstPost: React.FC = () => {

    const exampleCode = `
    print("Hello World")
    `

    return (
        <article>
            <p className="mb-4">
                Test post.
            </p>
            <h3 className="text-xl font-bold mb-2">The Problem</h3>
            <p className="mb-4">
                A
            </p>
            <CodeBlock code={exampleCode} language="python" />
            <h3 className="text-xl font-bold mb-2">The Solution</h3>
            <p>
                B
            </p>
            {/* You can add code blocks, images, etc. here */}
        </article>
    );
};

export default FirstPost;