<div className="img-grid">
          <div className="img-wrap">
            <img src="https://rb.gy/5jpq1z" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/yhcmzq" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/8gycsg" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/8gycsg" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/8gycsg" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/8gycsg" alt="" />
          </div>
          <div className="img-wrap">
            <img src="https://rb.gy/8gycsg" alt="" />
          </div>
        </div>


.img-grid {
  /* width: 90%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-content: space-evenly;
  border: 1px solid white; */

  /* width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: none;
  border: 1px solid white; */
  grid-template-columns: 120px 120px auto;
  grid-template-rows: 120px 120px 120px;
}

.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 40% 2%;
  position: relative;
  opacity: 0.8;
  width: 75%;
  border: 1px solid white;
  margin: 0;
}
.img-wrap img {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: contain;
}