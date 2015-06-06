class PerPage {
	constructor(page = 1, count = 50) {
		this.page = page;
		this.count = count;
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
		if (!this.total) {
			throw new Error("Can't determine whether there should be a next page without Paginator#total set");
		}
		if (this.total > this.count * this.page) {
			return this.page + 1;
		}
	}

	toObject() {
		return {
			page: this.page,
			previous: this.previous,
			next: this.next
		};
	}
}
