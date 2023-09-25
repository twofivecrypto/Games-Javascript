    // HTML is generated with all necessary elements
    function test_html_elements() {
        // Check if the necessary elements are present in the HTML
        const desc = document.querySelector('.desc');
        const canvas = document.querySelector('#gameCanvas');
        const startButton = document.querySelector('#startButton');
    
        // Assert that the elements are not null
        assert.notEqual(desc, null, "Desc element is missing");
        assert.notEqual(canvas, null, "Canvas element is missing");
        assert.notEqual(startButton, null, "Start button is missing");
    }