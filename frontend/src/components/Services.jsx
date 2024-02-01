import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.css";
import DropDown from "./DropDown";

function Services({ id, setChoice }) {
  const [arrayServices, setArrayServices] = useState("");
  const [renderedServices, setRenderedServices] = useState();

  const services = {};

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/service/${id}`)
      .then((response) => response.json())
      .then((parsedResponse) => setArrayServices(parsedResponse));
  }, []);

  useEffect(() => {
    if (arrayServices.length !== 0) {
      arrayServices.forEach((service) => {
        if (service.category_name in services) {
          services[service.category_name].push(service);
        } else {
          services[service.category_name] = [service];
        }
      });
    }

    setRenderedServices(
      Object.entries(services).map((service) => {
        return (
          <DropDown
            key={service[0]}
            category={service[0]}
            services={service[1]}
            setChoice={setChoice}
          />
        );
      })
    );
  }, [arrayServices]);
  return (
    <div className={styles.serviceContainer}>
      {renderedServices && renderedServices}
    </div>
  );
}

Services.propTypes = {
  id: PropTypes.number.isRequired,
  setChoice: PropTypes.func.isRequired,
};

export default Services;
