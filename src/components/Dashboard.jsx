import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


function Dashboard()
{
    const [contryname, setCountryname]= useState([]);
    const [medal, setMedal]= useState([]);
    const [embodied, setEmbodied]= useState([]);
    const [contryname2, setCountryname2]= useState([]);
    const [medal2, setMedal2]= useState([]);
    const [embodied2, setEmbodied2]= useState([]);

    useEffect( ()=>{
     const getdata= async()=>{
          const countryname=[];
          const getmedal=[];
          const getEmbodied=[];

        const reqData= await fetch("http://54.164.164.202:8000/carbon/"); 
        const resData= await reqData.json();
        for(let i=0; i<resData.length; i++)
        {
            countryname.push(resData[i].substructural_element_name);
            getmedal.push(parseInt(resData[i].TOTAL_A1_A5));
            getEmbodied.push(parseInt(resData[i].TOTAL_A_C));
        }
        setCountryname(countryname);
        setMedal(getmedal);
        setEmbodied(getEmbodied);
     

     }
     getdata();
    },[]);

    useEffect( ()=>{
        const newdata= async()=>{
             const countryname2=[];
             const getmedal2=[];
             const getEmbodied2=[];
   
           const reqData= await fetch("http://54.164.164.202:8000/carbon/"); 
           const resData= await reqData.json();
           for(let i=0; i<resData.length; i++)
           {
               countryname2.push(resData[i].substructural_element_name);
               getmedal2.push(parseInt(resData[i].TOTAL_A1_A5));
               getEmbodied2.push(parseInt(resData[i].TOTAL_A_C));
           }
           setCountryname2(countryname2);
           setMedal2(getmedal2);
           setEmbodied2(getEmbodied2);
        
   
        }
        newdata();
       },[]);

    return(
        <React.Fragment>
            <div style={{ display:'flex', flexDirection:"row", columnGap:'3px' }}>
            <Form.Select aria-label="Default select example">
      <option>Select Contractor Name</option>
      <option value="1">Barratt Developments</option>
      <option value="2">Kier Group</option>
      <option value="3">Taylor Wimpey</option>
    </Form.Select>
    <Form.Select aria-label="Default select example">
      <option>Select Project Name</option>
      <option value="1">Hospital</option>
      <option value="2">School</option>
      <option value="3">Office Building</option>
    </Form.Select>
  
   
            </div>
          <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{ display:'flex', flexDirection:"row", columnGap:'2px' }}>
          <Card className='container-fluid mt-3 mb-3  '>        
            <h5 className="text-center">Design A1-A5 Upfront Carbon - kgCo2e/m2</h5>
            <Chart 
            type="donut"
            width={400}
            height={350}
            series={medal2}

            options={{
             labels:contryname2,
            //  title:{
            //     text:"Medal Country Name",
            //    // align:"center",
            //  },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:false,
                            showAlways:true,
                             //formatter: () => '343',
                            // fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
             }


            }}
            
            />

            </Card>
            
            <Card className='container-fluid mt-3 mb-3 '>        
            <h5 className="text-center">Design A-C Embodied Carbon - kgCo2e/m2</h5>
            <Chart 
            type="donut"
            width={400}
            height={350}
            series={embodied2}

            options={{
             labels:contryname2,
            //  title:{
            //     text:"Medal Country Name",
            //    // align:"center",
            //  },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:false,
                            showAlways:true,
                             formatter:() => '',
                            //  fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
             }


            }}
            
            />

            </Card>
          </div>
          <div style={{ display:'flex', flexDirection:"row", columnGap:'2px'}}>
          <Card className='container-fluid mt-3 mb-3  '>        
            <h5 className="text-center">Build A1-A5 Upfront Carbon kgCo2e/m2</h5>
            <Chart 
            type="donut"
            width={400}
            height={350}
            series={medal}

            options={{
             labels:contryname2,
            //  title:{
            //     text:"Medal Country Name",
            //    // align:"center",
            //  },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:false,
                            showAlways:true,
                             //formatter: () => '343',
                            // fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
             }


            }}
            
            />

            </Card>
            
            <Card className='container-fluid mt-3 mb-3  '>        
            <h5 className="text-center">Build A-C Embodied Carbon - kgCo2e/m2</h5>
            <Chart 
            type="donut"
            width={400}
            height={350}
            series={embodied}

            options={{
             labels:contryname2,
            //  title:{
            //     text:"Medal Country Name",
            //    // align:"center",
            //  },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:false,
                            showAlways:true,
                             //formatter: () => '343',
                            // fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
             }


            }}
            
            />

            </Card>
          </div>

          </div> 
        </React.Fragment>
    );
}
export default Dashboard;