import { TestBed, inject } from '@angular/core/testing';

import { AlbumComponent } from './album.component';

describe('a album component', () => {
	let component: AlbumComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AlbumComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AlbumComponent], (AlbumComponent) => {
		component = AlbumComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});