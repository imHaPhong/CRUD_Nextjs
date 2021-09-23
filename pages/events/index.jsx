import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function EventsPage({events}) {
    return (
        <Layout>
            {events.length === 0 && <h3>No event to show</h3>}
            {events.length > 0 && events.map(evt => <EventItem key={evt.id} evt={evt}  />)}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/events?_sort=date:ASC`)
    const events = await res.json()
    return {
        props: {events},
        revalidate:1
      }
}