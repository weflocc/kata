<template>
  <div class="slice contact-1 md:flex w-r24/24 mx-auto">
    <div class="md:w-1/2 md:pr-large">
      <h1
        v-if="isH1 && title"
        v-kata-html="title"
        class="heading-2 mb-medium"
      />
      <h2 v-else-if="title" v-kata-html="title" class="mb-medium" />
      <p v-if="text" v-kata-html="text" class="mb-medium" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mb-medium"
      />
      <div class="columns fade-up">
        <div v-if="address" class="mb-medium">
          <p class="label-1">Address</p>
          <p v-kata-html="address" class="whitespace-pre-line" />
        </div>
        <div v-if="email" class="mb-medium">
          <p class="label-1">Email</p>
          <p>
            <a :href="'mailto:' + email">{{ email }}</a>
          </p>
        </div>
        <div v-if="telephone" class="mb-medium">
          <p class="label-1">Telephone</p>
          <p>
            <a :href="'tel:' + telephone">{{ telephone }}</a>
          </p>
        </div>
      </div>
      <SocialMedia />
    </div>
    <div v-if="!sendInBlue" id="form" class="md:w-1/2 md:pl-large">
      <p v-if="submitted" v-kata-html="thanks" />
      <form
        v-else
        :id="formName"
        :name="formName"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        :action="action"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="Contact form submission" />

        <div class="w-full mb-small field">
          <label for="name" class="sr-only">Name</label>
          <div class="w-full control block">
            <input
              id="name"
              class="input w-full"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="email" class="sr-only">Email</label>
          <div class="w-full control block">
            <input
              id="email"
              class="input w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div v-if="formPhone" class="w-full mb-small field">
          <label for="phone" class="sr-only">Phone</label>
          <div class="w-full control block">
            <input
              id="phone"
              class="input w-full"
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="message" class="sr-only">Message</label>
          <div class="w-full control block">
            <textarea
              id="message"
              rows="8"
              class="textarea w-full"
              name="message"
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>

        <div class="submit-wrap">
          <button class="btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div v-else-if="sendInBlue" id="form" class="md:w-1/2 md:pl-large">
      <!-- id for GA tracking -->
      <p
        v-if="submitted && (thanks || formFields.thanksMessage)"
        :id="formName + 'FormThanks'"
        v-kata-html="thanks ? thanks : formFields.thanksMessage"
      />
      <form
        v-else
        :id="formName"
        :ref="formName"
        :name="formName"
        method="POST"
        @submit.prevent="actionFn"
      >
        <div class="w-full mb-small field">
          <label for="name" class="sr-only">Name</label>
          <div class="w-full control block">
            <input
              id="name"
              class="input w-full"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="email" class="sr-only">Email</label>
          <div class="w-full control block">
            <input
              id="email"
              class="input w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div v-if="formPhone" class="w-full mb-small field">
          <label for="phone" class="sr-only">Phone</label>
          <div class="w-full control block">
            <input
              id="phone"
              class="input w-full"
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>

        <div class="w-full mb-small field">
          <label for="message" class="sr-only">Message</label>
          <div class="w-full control block">
            <textarea
              id="message"
              rows="8"
              class="textarea w-full"
              name="message"
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>

        <div class="submit-wrap">
          <button class="btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <p v-if="error" v-kata-html="error" />
    </div>
  </div>
</template>

<script>
import { title, text, textBody } from '../shared'
export default {
  mixins: [title, text, textBody],
  props: {
    isH1: {
      type: Boolean,
      default: false,
    },
    sendInBlue: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: '?form=submitted#form',
    },
    thanks: {
      type: String,
      default: 'Thank you for getting in contact.',
    },
    formPhone: {
      type: Boolean,
      default: false,
    },
    formName: {
      type: String,
      default: 'contact',
    },
  },
  data: () => ({
    submitted: false,
    error: '',
  }),
  computed: {
    formFields() {
      return this.$store.state.globalContent?.formFields
    },
  },
  watch: {
    '$route.query': function (newVal, oldVal) {
      if (newVal.form == 'submitted') {
        this.submitted = true
      } else {
        this.submitted = false
      }
    },
  },
  mounted() {
    if (this.$route.query.form == 'submitted') {
      this.submitted = true
    }
  },
  methods: {
    async actionFn(e) {
      let self = this
      let elems = e.target.elements
      let fields = []
      for (var i = 0; i < elems.length; i++) {
        var element = elems[i]
        fields.push({ name: element.name, value: element.value })
      }
      await this.$http
        .$post('/.netlify/functions/send-email', {
          adminEmail: this.formFields?.formNotifications,
          formName: this.formName,
          fields: fields,
        })
        .then((data) => {
          console.log('email sent:', data)
          self.submitted = true
        })
        .catch((e) => {
          console.error(e)
          self.error = 'Oops, something went wrong! Please try again later.'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-1 {
  .textarea,
  .input {
    display: block;
    border: 2px solid $primary;
    padding: 10px;

    &::placeholder {
      color: currentColor;
      opacity: 1;
    }
  }
}
</style>
