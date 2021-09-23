import { useRouter } from "next/router";
import qs from "qs";
import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout>
      <h1>Search result for {router.query.term}</h1>
      {events.length === 0 && <h3>No event to show</h3>}
      {events.length > 0 &&
        events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  console.log(query);
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  return {
    props: { events },
  };
}
