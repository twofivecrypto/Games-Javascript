// Create a container div
var container = document.createElement('div');

// Create an h1 element
var h1 = document.createElement('h1');
h1.textContent = 'The Statue of Liberty';
h1.style.backgroundColor = 'aqua';
h1.style.borderRadius = '12px';

// Append h1 to the container
container.appendChild(h1);

// Create an array of paragraph texts
var paragraphs = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum veritatis dignissimos tempore atque, cumque quae perspiciatis sunt ullam labore totam fuga ipsum laudantium aspernatur quis dolorem aliquam. Perspiciatis praesentium itaque officia voluptates accusamus molestias autem neque magni, blanditiis, nihil animi aliquid cum dolorum? Temporibus sed tempora eius necessitatibus qui corporis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic, iusto quae maiores laboriosam ex blanditiis! Repellendus tempora recusandae odio esse ipsa, nisi debitis aut sunt eius impedit et doloremque doloribus, pariatur aliquid temporibus, porro quasi sint obcaecati quos mollitia!",
    "Roses are red,",
    "Violets are blue,",
    "Eptstein didn't kill himself,",
    "The rumors were true!"
];

// Loop through the paragraphs array
paragraphs.forEach(function (text) {
    // Create a paragraph element
    var p = document.createElement('p');
    // Set innerHTML to include HTML tags
    p.innerHTML = text;
    // Append the paragraph to the container
    container.appendChild(p);

    // Create an hr element
    var hr = document.createElement('hr');
    // Append the horizontal rule to the container
    container.appendChild(hr);
});

// Append the container to the document body
document.body.appendChild(container);
