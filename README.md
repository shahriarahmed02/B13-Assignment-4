# Project Title: [Job Tracker]

## Answers to Technical Questions

### 1. Difference between getElementById, getElementsByClassName, and querySelector?
= getElementById targets a single unique ID and returns one Element where . getElementsByClassName targets all elements with a specific class and returns group of simillar elements.

= querySelector / querySelectorAll can target anything in css but querySelector returns the first match where querySelectorAll returns a static NodeList.

### 2. How to create and insert a new element?
= First, I use the document.createElement() method to create the element in the browser's memory.
Example: const myDiv = document.createElement('div');

Next, I define what the element looks like and what it says. I can use textContent for text or classList to add CSS classes.
Example: myDiv.textContent = 'New Element';

Gemini said
If you're writing this for an exam, you should structure it as a 3-step process. This shows the examiner you understand the logic behind DOM manipulation.

Step 1: Creation
First, I use the document.createElement() method to create the element in the browser's memory. This element exists but is not yet part of the visible page.

Example: const myDiv = document.createElement('div');

Step 2: Configuration (Adding Content/Styles)
Next, I define what the element looks like and what it says. I can use textContent for text or classList to add CSS classes.

Example: myDiv.textContent = 'New Element';

Example: myDiv.className = 'box-style';

Step 3: Insertion (Joining the DOM)
Finally, I select a parent element and use a method to "attach" my new element to the document tree.
appendChild(): I use this to add the element as the last child of the parent.

### 3. What is Event Bubbling?
= Event Bubbling is a process where an event starts at the most specific element (the target) and then "bubbles up" to its parent elements in the DOM tree.

### 4. What is Event Delegation?
= Event Delegation is a technique that uses Event Bubbling to handle events more efficiently.

### 5. preventDefault() vs stopPropagation()?
