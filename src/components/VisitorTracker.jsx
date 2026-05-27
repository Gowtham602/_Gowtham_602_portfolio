import { useEffect } from "react";

import emailjs from "@emailjs/browser";

export default function VisitorTracker() {

  useEffect(() => {

    // GET VISITOR INFO

    fetch("https://ipapi.co/json/")

      .then((res) => res.json())

      .then((data) => {

        // VISITOR DETAILS

        const visitorData = {

          ip: data.ip,

          country: data.country_name,

          city: data.city,

          region: data.region,

          org: data.org,

          browser: navigator.userAgent,

          platform: navigator.platform,

          language: navigator.language,
        };

        console.log(visitorData);

        // SEND EMAIL

        emailjs.send(

          "service_pdbptf8",

          "template_n44qjea",

          {

            ip: visitorData.ip,

            country: visitorData.country,

            city: visitorData.city,

            region: visitorData.region,

            org: visitorData.org,

            browser: visitorData.browser,

            platform: visitorData.platform,

            language: visitorData.language,
          },

          "Kct-n8ohLbVlObbi345tJ"
        
        )

        .then(() => {

          console.log("Visitor mail sent");

        })

        .catch((error) => {

          console.log(error);

        });

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);

  return null;
}