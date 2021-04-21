<div className="projectPage__body">
  <div className="projectPage__row">
    {/* column 1 */}
    <div className="projectPage__column">
      {/* <img src="https://rb.gy/gyeptl" alt="" /> */}
      <img
        src={weatherApp__main}
        alt=""
        onClick={() => setSelectedImg(weatherApp__main)}
      />

      <img
        src={todoList__main}
        alt=""
        onClick={() => setSelectedImg(todoList__main)}
      />
      <img
        src="https://rb.gy/wce0ju"
        alt=""
        onClick={() => setSelectedImg('https://rb.gy/wce0ju')}
      />

      {/* <img src="https://rb.gy/tbxckj" alt="" /> */}
      {/* <img src="https://rb.gy/iviien" alt="" /> */}
    </div>
    {/* column 2 */}
    <div className="projectPage__column">
      <img
        src={snippetSaver__main}
        alt=""
        onClick={() => setSelectedImg(snippetSaver__main)}
      />
      <img
        src={covidTracker__main}
        alt=""
        onClick={() => setSelectedImg(covidTracker__main)}
      />
      {/* <img src="https://rb.gy/qktl9m" alt="" /> */}

      {/* <img src="https://rb.gy/zbvpzd" alt="" /> */}
      <img
        src="https://rb.gy/tq7rvd"
        alt=""
        onClick={() => setSelectedImg('https://rb.gy/tq7rvd')}
      />
    </div>
    {/* column 3 */}
    <div className="projectPage__column">
      <img
        src={fbClone__main}
        alt=""
        onClick={() => setSelectedImg(fbClone__main)}
      />
      {/* <img src="https://rb.gy/3gzmdg" alt="" /> */}

      <img
        src={netflixClone__main}
        alt=""
        onClick={() => setSelectedImg(netflixClone__main)}
      />

      <img
        src="https://rb.gy/tkwrzf"
        alt=""
        onClick={() => setSelectedImg('https://rb.gy/tkwrzf')}
      />
      {/* <img src="https://rb.gy/tkwrzf" alt="" />
            <img src="https://rb.gy/qktl9m" alt="" /> */}
    </div>

    {selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    )}
  </div>
</div>;
