'use strict';

import LouboutinV3 from '../components/projects/LouboutinV3';
import ProjectField from '../components/projects/ProjectField.js';
import ProjectFloom from '../components/projects/ProjectFloom.js';

const ProjectList = {
	louboutinv4: {
		home: true,
		urlHash: 'louboutinv4',
		title: 'Christian Louboutin',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'louboutinv3'
		},
		posterImg: require('../../src/images/thumbnails/louboutin-v3-1.jpg'),
		order: {
			home: 1,
			date: 20160501
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
			date: 20160401
		}
	},
	'sporty-henri': {
		home: true,
		urlHash: 'sporty-henri',
		title: 'Sporty Henri',
		description: 'Digital Identity',
		component: ProjectFloom,
		className: {
			home: 'thumb3',
			projects: 'sporty-henri'
		},
		posterImg: require('../../src/images/thumbnails/sporty-henri.jpg'),
		order: {
			home: 2,
			date: 20160301
		}
	},
	'louboutin-spikes': {
		home: false,
		urlHash: 'louboutin-spikes',
		title: 'Louboutin Spikes',
		description: 'Video Shoot',
		component: ProjectFloom,
		className: {
			home: null,
			projects: 'louboutin-spikes'
		},
		posterImg: require('../../src/images/thumbnails/louboutin-spikes.jpg'),
		order: {
			home: 2,
			date: 20160201
		}
	},
	field: {
		home: false,
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
			date: 20160101
		}
	},
	louboutinv3: {
		home: false,
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
	'louboutin-beauty': {
		home: false,
		urlHash: 'louboutin-beauty',
		title: 'Louboutin Beauty',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'louboutin-beauty'
		},
		posterImg: require('../../src/images/thumbnails/louboutin-beauty.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	louboutinize: {
		home: false,
		urlHash: 'louboutinize',
		title: 'Louboutinize',
		description: 'iPhone App',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'louboutinize'
		},
		posterImg: require('../../src/images/thumbnails/louboutinize.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	'monsieur-london': {
		home: false,
		urlHash: 'monsieur-london',
		title: 'Monsieur London',
		description: 'Ecommerce',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'monsieur-london'
		},
		posterImg: require('../../src/images/thumbnails/monsieur-london.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	'barnaby-roper': {
		home: false,
		urlHash: 'barnaby-roper',
		title: 'Barnaby Roper',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'barnaby-roper'
		},
		posterImg: require('../../src/images/thumbnails/barnaby-roper.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	caratime: {
		home: false,
		urlHash: 'caratime',
		title: 'Caratime',
		description: 'Ecommerce',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'caratime'
		},
		posterImg: require('../../src/images/thumbnails/caratime.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	couturelab: {
		home: false,
		urlHash: 'couturelab',
		title: 'Couturelab',
		description: 'Ecommerce',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'couturelab'
		},
		posterImg: require('../../src/images/thumbnails/couturelab.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	harbour: {
		home: false,
		urlHash: 'harbour',
		title: 'Harbour',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'harbour'
		},
		posterImg: require('../../src/images/thumbnails/harbour.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	w152: {
		home: false,
		urlHash: 'w152',
		title: 'Industrial Facility w152',
		description: 'Mini Site',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'w152'
		},
		posterImg: require('../../src/images/thumbnails/w152.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	institut: {
		home: false,
		urlHash: 'institut',
		title: 'Institut des Mutations',
		description: 'Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'institut'
		},
		posterImg: require('../../src/images/thumbnails/institut.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	juun: {
		home: false,
		urlHash: 'Juun',
		title: 'Juun',
		description: 'Project Management System',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'juun'
		},
		posterImg: require('../../src/images/thumbnails/juun.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	'lm-logo': {
		home: false,
		urlHash: 'lm-logo',
		title: 'La Moulade',
		description: 'Interactive Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'lm-logo'
		},
		posterImg: require('../../src/images/thumbnails/lm-logo.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	orogo: {
		home: false,
		urlHash: 'orogo',
		title: 'Orogo',
		description: 'Iphone/Android App Design',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'orogo'
		},
		posterImg: require('../../src/images/thumbnails/orogo.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	postmatter: {
		home: false,
		urlHash: 'postmatter',
		title: 'Postmatter',
		description: 'Front-End Development',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'postmatter'
		},
		posterImg: require('../../src/images/thumbnails/postmatter.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	'serge-betsen': {
		home: false,
		urlHash: 'serge-betsen',
		title: 'Serge Betsen',
		description: 'Digital Identity',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'serge-betsen'
		},
		posterImg: require('../../src/images/thumbnails/serge-betsen.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	},
	simplytellit: {
		home: false,
		urlHash: 'simplytellit',
		title: 'SimplyTellit',
		description: 'Iphone App',
		component: LouboutinV3,
		className: {
			home: 'thumb1',
			projects: 'simplytellit'
		},
		posterImg: require('../../src/images/thumbnails/simplytellit.jpg'),
		order: {
			home: 1,
			date: 20150101
		}
	}
};

export default ProjectList;