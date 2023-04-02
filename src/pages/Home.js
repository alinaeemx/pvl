import { Card, Divider, } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import not from '../assets/not.png';
import { ExpTitle } from '../constants/constants';

const HomePage = () => {
  const navigate = useNavigate();

  const expList = [
    {
      title: ExpTitle[0],
      path: 'exp1',
      image: not
    },
    {
      title: ExpTitle[1],
      path: 'exp2',
      image: not
    },
    {
      title: ExpTitle[2],
      path: 'exp3',
      image: not
    },
    {
      title: ExpTitle[3],
      path: 'exp4',
      image: not
    },
    {
      title: ExpTitle[4],
      path: 'exp5',
      image: not
    },
    {
      title: ExpTitle[5],
      path: 'exp6',
      image: not
    }
  ]
  return (
    <div className='w-full h-full p-10 ' >
      <div className='w-full h-full flex flex-col justify-between items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 ' >
        {
          expList.map((item, i) => {
            return (
              <Card
                className='borderColor shadow mb-5 md:mb-0'
                hoverable
                style={{ width: 300, height: 300, background: '#F1F1F2' }}
                cover={item.image && <img className='p-1' alt="" src={item.image} />}
                key={i + 1}
                onClick={() => { navigate(`/${item.path}`) }}>
                <Divider />
                <span>{item.title}</span>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
export default HomePage