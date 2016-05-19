'use strict';

import LouboutinV3 from '../components/projects/LouboutinV3';
import ProjectField from '../components/projects/ProjectField.js';
import ProjectFloom from '../components/projects/ProjectFloom.js';

const ProjectList = {
	louboutinv3: {
		home: true,
		urlHash: 'louboutinv3',
		title: 'Christian Louboutin',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'louboutinv3'
		},
		posterImg: require('../../src/images/thumbnails/louboutin-v3-2.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	field: {
		home: true,
		urlHash: 'field',
		title: 'Field',
		description: 'Digital Identity',
		component: ProjectField,
		className: {
			home: 'thumb3',
			projects: 'field'
		},
		posterImg: require('../../src/images/thumbnails/field.jpg'),
		order: {
			home: 3,
			date: 20160115
		}
	},
	floom: {
		home: true,
		urlHash: 'floom',
		title: 'Floom',
		description: 'Digital Identity',
		component: ProjectFloom,
		className: {
			home: 'thumb2',
			projects: 'floom'
		},
		posterImg: require('../../src/images/thumbnails/floom.jpg'),
		order: {
			home: 2,
			date: 20160501
		}
	},
	// dummy 
	'sporty-henri-box': {
		home: true,
		urlHash: 'sporty-henri-box',
		title: 'Sporty Henri box',
		description: 'Digital Identity',
		component: ProjectFloom,
		className: {
			home: null,
			projects: 'sporty-henri-box'
		},
		//posterImg: require('../../src/images/thumbnails/sporty-genri-thumb4.jpg'),
		posterImg: require('../../src/images/thumbnails/floom.jpg'),
		order: {
			home: 2,
			date: 20141206
		}
	}
};

export default ProjectList;