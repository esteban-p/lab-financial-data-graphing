const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json'

axios.get(apiUrl)
	.then(response => {
		//console.log(response.data);
		printChart(response.data);
	})
	.catch(err => {
		console.log(err)
	})


    const printChart = stockData => {
        const dailyData = stockData.bpi;
        console.log(dailyData);
        
        // x axis
        const stockDates = Object.keys(dailyData);
        //console.log(stockDates);

        // y axis
        const stockPrices = stockDates.map(date => dailyData[date])

        // draw chart
        //console.log(stockPrices)
        const ctx = document.querySelector('#myChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: stockDates,
                datasets: [
                    {
                        label: 'Stock Chart',
                        backGroundColor: 'rgb(255,99,132',
                        borderColor: 'rgb(255,99,132',
                        data: stockPrices
                    }
                ]
            }
        })
    }