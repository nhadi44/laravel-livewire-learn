import { expect } from 'chai';
import * as actions from './choices';

describe('actions/choices', () => {
	describe('addChoice action', () => {
		it('returns ADD_CHOICE action', () => {
			const value = 'test';
			const label = 'test';
			const id = 1;
			const groupId = 1;
			const disabled = false;
			const elementId = 1;
			const customProperties = { test: true };
			const placeholder = true;
			const keyCode = 10;

			const expectedAction: actions.AddChoiceAction = {
				type: 'ADD_CHOICE',
				value,
				label,
				id,
				groupId,
				disabled,
				elementId,
				customProperties,
				placeholder,
				keyCode,
			};

			expect(
				actions.addChoice({
					value,
					label,
					id,
					groupId,
					disabled,
					elementId,
					customProperties,
					placeholder,
					keyCode,
				}),
			).to.eql(expectedAction);
		});
	});

	describe('filterChoices action', () => {
		it('returns FILTER_CHOICES action', () => {
			const results = Array(10);
			const expectedAction: actions.FilterChoicesAction = {
				type: 'FILTER_CHOICES',
				results,
			};

			expect(actions.filterChoices(results)).to.eql(expectedAction);
		});
	});

	describe('activateChoices action', () => {
		describe('not passing active parameter', () => {
			it('returns ACTIVATE_CHOICES action', () => {
				const expectedAction: actions.ActivateChoicesAction = {
					type: 'ACTIVATE_CHOICES',
					active: true,
				};

				expect(actions.activateChoices()).to.eql(expectedAction);
			});
		});

		describe('passing active parameter', () => {
			it('returns ACTIVATE_CHOICES action', () => {
				const active = true;
				const expectedAction: actions.ActivateChoicesAction = {
					type: 'ACTIVATE_CHOICES',
					active,
				};

				expect(actions.activateChoices(active)).to.eql(expectedAction);
			});
		});
	});

	describe('clearChoices action', () => {
		it('returns CLEAR_CHOICES action', () => {
			const expectedAction: actions.ClearChoicesAction = {
				type: 'CLEAR_CHOICES',
			};

			expect(actions.clearChoices()).to.eql(expectedAction);
		});
	});
});
