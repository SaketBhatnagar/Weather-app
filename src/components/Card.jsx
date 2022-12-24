import React from "react";

const Card = ({
  name,
  ob_time,
  temp,
  img,
  w_descrip,
  uv,
  wind,
  precip,
  humidity,
  visibility,
  is_day,
  date_time,
}) => {
  return (
    <section className="card-Block">
      <article>
        <div className="r1">
          <span>{name}</span>
        </div>
        <div className="r2">
          <div className="img">
            <img src={img} alt="weather" />
            <div>{w_descrip}</div>
          </div>
          <div className="temp">
            Temp : {temp} <sup>o</sup> C
          </div>
          <div className="wind_uv">
            <div>Wind : {wind}</div>
            <div>Precip : {precip}</div>
            <div>UV : {uv}</div>
          </div>
        </div>
        <div className="r3">
          <div>Day/Night : {is_day ? " Day" : " Night"}</div>
          <div>Visiblity : {visibility}</div>
        </div>
      </article>
    </section>
  );
};

export default Card;
