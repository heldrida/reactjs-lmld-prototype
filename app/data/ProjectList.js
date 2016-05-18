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
		align: {
			home: 'left',
			projects: 'left'
		},
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
		align: {
			home: 'left',
			projects: 'left'
		},
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
		align: {
			home: 'right',
			projects: 'left'
		},
		className: {
			home: 'thumb2',
			projects: 'floom'
		},
		posterImg: require('../../src/images/thumbnails/floom.jpg'),
		order: {
			home: 2,
			date: 20160501
		}
	}
};

export default ProjectList;