'use strict';

class PerPage {
	constructor(page, count) {
		this.page = page ? parseInt(page, 10) : 1;
		this.count = parseInt(count, 10) || 50;
	}

	get offset() {
		return (this.page - 1) * this.count;
	}

	get previous() {
		if (this.page > 1) {
			return this.page - 1;
		}
	}

	get next() {
		if (this.total === undefined) {
			throw new Error("Can't determine whether there should be a next page without Paginator#total set");
		}
		if (this.total > this.count * this.page) {
			return this.page + 1;
		}
	}

	get first() {
		return 1;
	}

	get last() {
		if (this.total === undefined) {
			throw new Error("Can't determine what the last page number is without Paginator#total set");
		}
		return Math.floor(this.total / this.count) + 1;
	}

	toObject() {
		return {
			page: this.page,
			previous: this.previous,
			next: this.next,
			first: this.first,
			last: this.last,
			total: this.total
		};
	}
}

module.exports = PerPage;
