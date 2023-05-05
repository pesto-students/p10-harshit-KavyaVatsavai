
	function pairsWithDiffK(arr, n, k)
{
	 val= 0;
	
	// Pick all elements one by one
	for (let i = 0; i < n; i++)
	{	
		// See if there is a pair of this
		// picked element
		for (let j = i+1; j < n; j++)
			if (arr[i] - arr[j] == k ||
				arr[j] - arr[i] == k )
				val=1
	}
	return val;
}

// Driver program to test above function
	arr =new Array(-10, 20);
	n = arr.length;
	k = 30;
	console.log(pairsWithDiffK(arr, n, k));
			

