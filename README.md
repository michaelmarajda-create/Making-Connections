changeName(event): Dynamic profile editing function that overrides default anchor tag behaviors to instantly replace the displayed header text (Jane Doe) with a new profile name on the DOM.

handleRequest(isAccepted, iconElement): Dual-purpose logic that manages connection requests by traversing the DOM tree via parentElement to cleanly remove the targeted list item (<li>) upon user interaction.

State Management Badge Updates: Embedded within the request handler to automatically decrement the "Connection Requests" counter for any interaction, while conditionally incrementing the "Your Connections" value only when a request is accepted.

Reusable Index Targeting: Utilizes arguments passed directly from event listeners to independently manage and alter values across multiple distinct user items without code duplication.
