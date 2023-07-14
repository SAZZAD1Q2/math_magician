import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

global.window = {};
global.document = {
  createElement: () => {},
};
global.navigator = {
  userAgent: 'node.js',
};
