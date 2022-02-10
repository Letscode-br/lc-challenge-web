import "./styles.css";

export function Inspiration() {
  return (
    <section id="inspiration">
      <h2>Para inspirar</h2>

      <div className="inspiration-cards">
        <div className="card">
          <p className="card-content">
            "The tragedy in life doesn’t lie in not reaching your goal. The
            tragedy lies in having no goal to reach."
          </p>

          <p className="card-citation">
            <strong>Benjamin E. Mays</strong>, American civil rights leader
          </p>
        </div>
        <div className="card">
          <p className="card-content">
            "Until we can manage time, we can manage nothing else."
          </p>

          <p className="card-citation">
            <strong>Peter Drucker</strong>, management consultant
          </p>
        </div>
      </div>
    </section>
  );
}
