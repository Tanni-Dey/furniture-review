import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='grid md:grid-cols-2 px-10 gap-5'>
            <div className='pt-20'>
                <h2 className='text-blue-900 font-sans text-3xl pb-10'>Month wise Sell</h2>
                <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#FB923C" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div className='pt-20'>
                <h2 className='text-blue-900 font-sans text-3xl pb-10'>Investment vs Revenue</h2>
                <BarChart width={600} height={400} data={data}>
                    <Bar dataKey="investment" stackId="a" fill="#1E3A8A" />
                    <Bar dataKey="revenue" stackId="a" fill="#FB923C" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </div>
            <div className='pt-20'>
                <h2 className='text-blue-900 font-sans text-3xl pb-10'>Investment vs Revenue</h2>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#1E3A8A" />
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FB923C" label />
                    <Tooltip />
                </PieChart>
            </div>
            <div className='pt-20'>
                <h2 className='text-blue-900 font-sans text-3xl pb-10'>Investment,Revenue and Sell </h2>
                <ComposedChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#1E3A8A" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    <Scatter dataKey="sell" fill="#FB923C" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;