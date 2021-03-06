/**
 * Internal dependencies
 */
import '../';
import { blockEditRender } from 'blocks/test/helpers';

describe( 'core/embed', () => {
	test( 'block edit matches snapshot', () => {
		const wrapper = blockEditRender( 'core/table' );

		expect( wrapper ).toMatchSnapshot();
	} );
} );
