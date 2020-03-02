import React, { useEffect, useState } from 'react';
import { Layout, Card } from '../../components';
import api from '../../services/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAll() {
      const response = await api.get('pokemon');
      setData(response.data.results);
      console.log(response.data.results);
    }

    getAll();
  }, []);

  return (
    <Layout>
      {
        data.map((res) => (
          <Card key={res.name}>
            <section style={{ height: '100px' }}>
              {res.name}
            </section>
          </Card>
        ))
        || <div> </div>
        }
    </Layout>
  );
};

export default Home;
