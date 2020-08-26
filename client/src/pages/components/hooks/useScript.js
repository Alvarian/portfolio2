import { useState, useEffect } from 'react';


// Hook
function useScript(payload) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(payload ? "loading" : "idle");

  useEffect(
    () => {
      const element = document.querySelector('.app') || null;
    
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!payload || !element) {
        setStatus("idle");
        return;
      }
      const src = payload.logic;
      const url = payload.style;

      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        let style = document.createElement("link");
        style.rel = "stylesheet";
        style.type = "text/css";
        style.href = url || "";

        element.appendChild(style);
        element.appendChild(script);

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"));
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };

      // Add event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [payload] // Only re-run effect if script src changes
  );

  return status;
}


export default useScript;