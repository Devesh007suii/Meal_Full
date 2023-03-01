import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';





import {
  Chart as ChartJS,
  BarElement, // for rectangular bars
  CategoryScale, // x-axis
  LinearScale, //y-axis
  Tooltip,
  Legend
} from "chart.js";
import { useRef } from 'react';

import { Bar, getElementsAtEvent, Pie } from 'react-chartjs-2';
import Booked from '../Booked/Booked';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)



const Calen = () => {
  //2021-05-18 12:39:29
  const d=new Date("Tue May 18 2021")
  
  const [date, setDate] = useState(d);

  const onChange = date => {
    setDate(date);
  }

  const [valuesOFMonths, setValuesOFMonths] = useState('');
  const [months, setMonths] = useState("")
  const [e1, setf1] = useState([]);
  const [e2, setf2] = useState([]);
  const [e3, setf3] = useState([]);

  const [showModal, setShowModal] = useState(false)

  const data = {
    labels: months,
    datasets: [
      {
        label: "Mealful",
        data: valuesOFMonths,
        backgroundColor: "black",
        borderColor: "orange",
        borderWidth: 3,



      }
    ]
  }





  async function findDate() {

    const url = "/Dates.json";
    const response = await fetch(url) //await is because we are waitiing to fetch 
    // and fetch means it will take all the information from url
    const datapoints = await response.json();
    console.log(datapoints)

    //const d=date.toISOString();
    const d1 = date.toString();


    //for day (toString) "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
    //for ISO "2011-10-05T14:48:00.000Z"
    let day2 = d1.slice(8, 10);
    let month2 = d1.slice(4, 7);
    let year2 = d1.slice(11, 15)



    if (month2 === "Jan") {
      month2 = "01";
    }
    if (month2 === "Feb") {
      month2 = "02";
    }
    if (month2 === "Mar") {
      month2 = "03";
    }
    if (month2 === "Apr") {
      month2 = "04";
    }
    if (month2 === "May") {
      month2 = "05";
    }
    if (month2 === "Jun") {
      month2 = "06";
    }
    if (month2 === "Jul") {
      month2 = "07";
    }
    if (month2 === "Aug") {
      month2 = "08";
    }
    if (month2 === "Sep") {
      month2 = "09";
    }
    if (month2 === "Oct") {
      month2 = "10";
    }
    if (month2 === "Nov") {
      month2 = "11";
    }
    if (month2 === "Dec") {
      month2 = "12";
    }




    let year1 = parseInt(year2, 10)
    let month1 = parseInt(month2, 10);
    let day1 = parseInt(day2, 10);

    const finalArr = [];
    let dayyy = [];





    let aa = []
    let bb = []
    let cc = []
    let dd = []
    let ee = []
    let ff = []
    let gg = []
    let hh = []

    for (let i = 0; i < 3; i++) {
      let q = 0;

      let a = 0
      let b = 0
      let c = 0
      let d = 0
      let e = 0
      let f = 0
      let g = 0
      let h = 0;
      var m = datapoints.mealtime.map((index) => {
        let rr = index.item_date;
        let year = rr.slice(0, 4);
        let month = rr.slice(5, 7);
        let day = rr.slice(8);
        let ee = index.schedule_time;
        let time = ee.slice(11, 13);


        year = parseInt(year, 10)
        month = parseInt(month, 10);
        day = parseInt(day, 10);
        time = parseInt(time, 10);
        if (day1 === 0) {
          month1--;
          if (month1 === 0) {
            day1 = 31;
            month1 = 12;
            year1 = year1 - 1;
            if (year1 === year && month1 === month && day1 === day) {
              q++;
              if (time >= 0 && time <= 3) {
                a++;

              }
              else if (time > 3 && time <= 6) {
                b++;

              }
              else if (time > 6 && time <= 9) {
                c++;

              }
              else if (time > 9 && time <= 12) {
                d++;

              }
              else if (time > 12 && time <= 15) {
                e++

              }
              else if (time > 15 && time <= 18) {
                f++

              }
              else if (time > 18 && time <= 21) {
                g++

              }
              else if (time > 21 && time <= 24) {
                h++;

              }
            }

          }
          else {

            if (month <= 7) {
              if ((month1) % 2 !== 0) {
                day1 = 31;
                if (year1 === year && month1 === month && day1 === day) {
                  q++;
                  if (time >= 0 && time <= 3) {
                    a++;

                  }
                  else if (time > 3 && time <= 6) {
                    b++;

                  }
                  else if (time > 6 && time <= 9) {
                    c++;

                  }
                  else if (time > 9 && time <= 12) {
                    d++;

                  }
                  else if (time > 12 && time <= 15) {
                    e++

                  }
                  else if (time > 15 && time <= 18) {
                    f++

                  }
                  else if (time > 18 && time <= 21) {
                    g++

                  }
                  else if (time > 21 && time <= 24) {
                    h++;

                  }
                }
              }
              else {
                day1 = 30;

                if (year1 === year && month1 === month && day1 === day) {
                  q++;
                  if (time >= 0 && time <= 3) {
                    a++;

                  }
                  else if (time > 3 && time <= 6) {
                    b++;

                  }
                  else if (time > 6 && time <= 9) {
                    c++;

                  }
                  else if (time > 9 && time <= 12) {
                    d++;

                  }
                  else if (time > 12 && time <= 15) {
                    e++

                  }
                  else if (time > 15 && time <= 18) {
                    f++

                  }
                  else if (time > 18 && time <= 21) {
                    g++

                  }
                  else if (time > 21 && time <= 24) {
                    h++;

                  }
                }
              }
            }
            else {
              if ((month1) % 2 === 0) {
                day1 = 31;

                if (year1 === year && month1 === month && day1 === day) {
                  q++;
                  if (time >= 0 && time <= 3) {
                    a++;

                  }
                  else if (time > 3 && time <= 6) {
                    b++;

                  }
                  else if (time > 6 && time <= 9) {
                    c++;

                  }
                  else if (time > 9 && time <= 12) {
                    d++;

                  }
                  else if (time > 12 && time <= 15) {
                    e++

                  }
                  else if (time > 15 && time <= 18) {
                    f++

                  }
                  else if (time > 18 && time <= 21) {
                    g++

                  }
                  else if (time > 21 && time <= 24) {
                    h++;

                  }
                }
              }
              else {
                day1 = 30;

                if (year1 === year && month1 === month && day1 === day) {
                  q++;
                  if (time >= 0 && time <= 3) {
                    a++;

                  }
                  else if (time > 3 && time <= 6) {
                    b++;

                  }
                  else if (time > 6 && time <= 9) {
                    c++;

                  }
                  else if (time > 9 && time <= 12) {
                    d++;

                  }
                  else if (time > 12 && time <= 15) {
                    e++

                  }
                  else if (time > 15 && time <= 18) {
                    f++

                  }
                  else if (time > 18 && time <= 21) {
                    g++

                  }
                  else if (time > 21 && time <= 24) {
                    h++;

                  }
                }
              }
            }

          }
        }
        else {

          if (year1 === year && month1 === month && day1 === day) {
            q++;
            if (time >= 0 && time <= 3) {
              a++;

            }
            else if (time > 13 && time <= 6) {
              b++;

            }
            else if (time > 6 && time <= 9) {
              c++;

            }
            else if (time > 9 && time <= 12) {
              d++;

            }
            else if (time > 12 && time <= 15) {
              e++

            }
            else if (time > 15 && time <= 18) {
              f++

            }
            if (time > 18 && time <= 21) {
              g++

            }
            else if (time > 21 && time <= 24) {
              h++;

            }
          }

        }


      })


      finalArr.push(q);
      dayyy.push(day1);
      day1 = day1 - 1;


      aa.push(a);
      bb.push(b);
      cc.push(c);
      dd.push(d);
      ee.push(e);
      ff.push(f);
      gg.push(g);
      hh.push(h);

    }



    let f1 = [aa[0], bb[0], cc[0], dd[0], ee[0], ff[0], gg[0], hh[0]];
    let f2 = [aa[1], bb[1], cc[1], dd[1], ee[1], ff[1], gg[1], hh[1]];
    let f3 = [aa[2], bb[2], cc[2], dd[2], ee[2], ff[2], gg[2], hh[2]];


    setValuesOFMonths(finalArr);
    setMonths(dayyy);
    setf1(f1);
    setf2(f2);
    setf3(f3);





  }


  const chartRef = useRef();
  const onClic = (event) => {
    if ((getElementsAtEvent(chartRef.current, event).length > 0)) {
      const Index = (getElementsAtEvent(chartRef.current, event)[0].index)
      const dayF = data.labels[Index];
      const valueF = data.datasets[0].data[Index];
      const zf = data.datasets[0].schedule;
      localStorage.setItem('finalDate', [dayF]);
      localStorage.setItem('finalValue', [valueF]);
      localStorage.setItem('ii', [Index]);


      setShowModal(true);
    }
  }




  return (
    

    <div style={{margin: 0, border: 0, padding: 0}} >
      <Heading m={"12"} textAlign={"center"}  children="Making Eating Well Affordable And Easy" />
      <HStack m={"9"}>
        <Box onClick={() => findDate()} boxShadow={"2xl"} mx={40}>
          <VStack>
            <Heading size={'sm'} children="Select Your Day" />
            <Calendar onChange={onChange} value={date} />

          </VStack>
        </Box>



        <Box>
          <Booked array1={e1} array2={e2} array3={e3} show={showModal} setShowModal={setShowModal} />
          <Heading size={'md'} children="Click on the Bar Graph To See The Schedule Time" />
          <Bar
            data={data}
            onClick={onClic}
            ref={chartRef}
          >
          </Bar>
        </Box>
      </HStack>



    </div>








  );
}

export default Calen