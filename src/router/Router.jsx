import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext({
  path: "/",
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    if (!to) return;

    if (to.startsWith("/#")) {
      const targetId = to.slice(2);
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
        setPath("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 60);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, className = "", children, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
