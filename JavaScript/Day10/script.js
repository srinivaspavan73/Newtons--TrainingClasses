// This function runs once the entire HTML page has loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GETTING ELEMENTS FROM THE HTML ---
    // We need to get references to the form and the list where events will be displayed.
    const eventForm = document.getElementById('event-form');
    const eventsList = document.getElementById('events-list');

    // --- 2. LOADING EXISTING EVENTS ---
    // We get the event data stored in the browser's localStorage.
    // localStorage stores data as strings, so we use JSON.parse() to turn it back into an array.
    // If there's nothing in localStorage, we start with an empty array [].
    let events = JSON.parse(localStorage.getItem('events')) || [];

    // --- 3. DISPLAYING THE EVENTS ---
    // This function is responsible for showing all the events on the page.
    const renderEvents = () => {
        // First, clear the list of any old content.
        eventsList.innerHTML = '';

        // If there are no events, show a message.
        if (events.length === 0) {
            eventsList.innerHTML = '<p>No events yet. Why not add one?</p>';
            return;
        }

        // Loop through each event in our 'events' array.
        events.forEach(event => {
            // Create a new 'div' element for the event card.
            const eventCard = document.createElement('div');
            // Add CSS classes to style it.
            eventCard.className = `event-card category-${event.category}`;

            // Create the HTML content for the card using the event's data.
            // We use template literals (the backticks ``) to easily insert variables.
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p class="event-description">${event.description || 'No description provided.'}</p>
                <div class="countdown-timer" id="timer-${event.id}"></div>
                <div class="event-footer">
                    <button class="delete-btn" data-id="${event.id}">Delete</button>
                </div>
            `;

            // Add the new event card to the events list in the HTML.
            eventsList.appendChild(eventCard);

            // --- 4. STARTING THE COUNTDOWN FOR THIS EVENT ---
            const timerElement = document.getElementById(`timer-${event.id}`);
            const targetDate = new Date(event.datetime).getTime();

            // The setInterval function runs a piece of code every 1000 milliseconds (1 second).
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                // If the event time has passed...
                if (distance < 0) {
                    clearInterval(interval); // Stop the countdown
                    timerElement.innerHTML = `🎉 This event has started!`;
                    timerElement.classList.add('ended');
                } else {
                    // ...otherwise, calculate the remaining time.
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // Display the calculated time in the timer element.
                    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            }, 1000);

            // --- 5. SIMULATING EMAIL REMINDER ---
            // Check if a reminder needs to be logged to the console.
            const oneDayInMillis = 24 * 60 * 60 * 1000;
            if (event.email && (targetDate - new Date().getTime() < oneDayInMillis)) {
                console.log(`Reminder: The event "${event.title}" is less than 24 hours away. A reminder would be sent to ${event.email}.`);
            }
        });
    };

    // --- 6. HANDLING THE FORM SUBMISSION ---
    // Listen for when the user clicks the 'Add Event' button.
    eventForm.addEventListener('submit', (e) => {
        // e.preventDefault() stops the browser from refreshing the page, which is the default form behavior.
        e.preventDefault();

        // Get the values from the form inputs.
        const title = document.getElementById('event-title').value;
        const description = document.getElementById('event-description').value;
        const datetime = document.getElementById('event-datetime').value;
        const category = document.getElementById('event-category').value;
        const email = document.getElementById('event-email').value;
        
        // Validation: Check if the date is in the future.
        if (new Date(datetime) <= new Date()) {
            alert('Please select a future date and time for the event.');
            return; // Stop the function here if validation fails.
        }

        // Create a new event object with the data.
        // Date.now() creates a unique ID based on the current timestamp.
        const newEvent = {
            id: Date.now(),
            title,
            description,
            datetime,
            category,
            email
        };

        // Add the new event to our main 'events' array.
        events.push(newEvent);

        // Save the updated array to localStorage.
        // We use JSON.stringify() to convert the array into a string for storage.
        localStorage.setItem('events', JSON.stringify(events));

        // Reset the form fields for the next entry.
        eventForm.reset();

        // Re-render the events list to show the new event.
        renderEvents();
    });

    // --- 7. HANDLING EVENT DELETION ---
    // We listen for clicks on the entire events list.
    eventsList.addEventListener('click', (e) => {
        // We only care if the clicked element is a delete button.
        if (e.target.classList.contains('delete-btn')) {
            // Ask for confirmation before deleting.
            if (confirm('Are you sure you want to delete this event?')) {
                // Get the unique ID of the event from the button's 'data-id' attribute.
                const eventId = parseInt(e.target.dataset.id);
                
                // Use the filter() method to create a new array *without* the event we want to delete.
                events = events.filter(event => event.id !== eventId);
                
                // Save the new, smaller array to localStorage.
                localStorage.setItem('events', JSON.stringify(events));
                
                // Re-render the list to reflect the deletion.
                renderEvents();
            }
        }
    });

    // --- INITIAL CALL ---
    // Call renderEvents() when the page first loads to display any stored events.
    renderEvents();
});