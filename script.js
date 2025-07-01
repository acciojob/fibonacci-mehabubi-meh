function fibonacci(num) {
// your code here
	

		
			if (num === 1) return 0;
			if (num === 2) return 1;

			let a = 0, b = 1, c;

			for (let i = 3; i <= num; i++) {
				c = a + b;
				a = b;
				b = c;
			}

			return b;
		}

		// Optional: call and test the function
		console.log(fibonacci(1)); // Output: 0
		console.log(fibonacci(5)); // Output: 3
	

}

module.exports = fibonacci;
