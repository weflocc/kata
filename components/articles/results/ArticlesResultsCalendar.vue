<template>
  <div class="article-results-calendar">
    <client-only>
      <!-- <FullCalendar :options="calendarOptions" /> -->
    </client-only>
  </div>
</template>

<script>
// COPY THIS FILE INTO YOUR PROJECT LOCALLY
// and uncomment the requirements below and FullCalendar in the template above

// articles require startDate and endDate fields
// install the following packages
// yarn add @fullcalendar/daygrid
// yarn add @fullcalendar/interaction
// yarn add @fullcalendar/vue

// uncomment below:
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    // FullCalendar, // make the <FullCalendar> tag available
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    calendarOptions() {
      return {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        events: this.events,
      }
    },
    events() {
      let events = []
      if (this.articles) {
        for (let index = 0; index < this.articles.length; index++) {
          const element = this.articles[index]

          //need date +1 day because full calendar ends it at midnight the day before it should end
          let endDate = new Date(element.endDate)

          // add a day
          endDate = endDate.setDate(endDate.getDate() + 1)

          let obj = {
            title: element.title,
            allDay: 'true',
            start: this.formatDate(element.startDate),
            end: endDate,
            url: this.getLink(element._id),
          }

          events.push(obj)
        }
      }
      return events
    },
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    },
  },
}
</script>

<style lang="scss">
.fc-h-event {
  background-color: $primary;
  border-color: $primary;
  font-weight: bold;
}
.fc .fc-button-primary {
  background-color: $secondary;
  border-color: $secondary;
  font-weight: bold;
}
.fc .fc-button-primary:disabled {
  background-color: rgba($secondary, 0.5);
  border-color: rgba($secondary, 0.5);
}
</style>
