import React from 'react';
import { Layout } from 'components';

const Component = () => (
    <Layout>
        <div className="page-header">
            <h1>Guidelines</h1>
        </div>

        <p>Running tests (<code>npm test</code>), a series of errors will be reported.</p>
        <p>Initially correct errors in <code>questions.js</code>. Then finalize About and Message pages.</p>

        <dl>
            <dt>About</dt>
            <dd>Single page, only with images and content Lorem.</dd>
            <dt>Message</dt>
            <dd>Entry form, which should generate a register calling the message API.</dd>
            <dt>Bonus</dt>
            <dd>In addition, a bonus page can be created with the listing operations, editing and deletion of message data.</dd>
        </dl>

        <h3>Access to Data</h3>
        <p>
            In that same project, has the API server running on port 3001.<br />
            Possible endpoints, and the parameters of input and output, are in <a href="http://localhost:3001/documentation" target="_blank">API documentation</a>.
        </p>

        <h3>Notes</h3>
        <p>
            It is not mandatory to use this web project is also accepted the creation of a new structure using vanilla, libs or frameworks that you prefer.<br />
            However, the activities keep the same:
        </p>
        <ul>
            <li>Complete functions in questions.js;</li>
            <li>Creating pages About e Message (connected with API);</li>
            <li>Bonus Page.</li>
        </ul>

        <h3>Technologies</h3>
        <ul>
            <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference" target="_blank">HTML</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank">Javascript</a> (<a href="https://ponyfoo.com/articles/es6" target="_blank">ES2015</a> - <a href="https://babeljs.io" target="_blank">Babel</a>)
            </li>
            <li>
                <a href="https://facebook.github.io/react/docs/thinking-in-react.html" target="_blank">React</a>
            </li>
            <li>
                <a href="http://redux.js.org" target="_blank">Redux</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank">CSS</a>
            </li>
            <li>
                <a href="http://lesscss.org/" target="_blank">Less</a>
            </li>
            <li>
                <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/" target="_blank">BEM</a>
            </li>
            <li>
                <a href="https://github.com/petehunt/webpack-howto" target="_blank">Webpack</a>
            </li>
            <li>
                <a href="http://eslint.org" target="_blank">ESLint</a>
            </li>
            <li>
                <a href="https://github.com/avajs/ava" target="_blank">AVA</a>
            </li>
            <li>
                <a href="http://airbnb.io/enzyme" target="_blank">Enzyme</a>
            </li>
        </ul>

        <hr />

        <h2>About you</h2>

        <h3>Responsibilities</h3>
        <ul>
            <li>Collaborate to iterate on the design and implementation of our product</li>
            <li>Build efficient and reusable front-end systems and abstractions</li>
            <li>Participate in design and code reviews</li>
            <li>Identify and communicate front-end best practices</li>
        </ul>

        <h3>Techniques</h3>
        <ul>
            <li>JS (ES6+)</li>
            <li>HTML, CSS, and related web technologies</li>
            <li>Functional programming fundamentals (functions, HOFs, compositions, ...)</li>
            <li>Familiarity with server-side web frameworks</li>
        </ul>

        <hr />

        <h2>About us</h2>

        <h3>Our current tech stack</h3>
        <ul>
            <li>React stateless components</li>
            <li>Immutable state</li>
            <li>State selectors</li>
            <li>Observable streams (RxJS)</li>
            <li>Webpack module bundler</li>
        </ul>
    </Layout>
);

Component.displayName = 'lib/screens/home/screen';

export default Component;
