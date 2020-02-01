<template>
  <main class="login">
    <div class="p-5 w-100 d-flex align-items-center justify-content-center flex-column">
      <div class="login-header text-center">LOGIN</div>
      <div class="mt-4 w-100 login-cont">
        <b-icon class="person-icon" :icon="active ? 'person-fill' : 'person'"></b-icon>
        <input
          @focus="active = true"
          @blur="check"
          autocomplete="off"
          type="email"
          placeholder="Email"
          @input="active = true"
          v-model="form.email"
        />
      </div>
      <div class="mt-4 w-100 login-cont">
        <b-icon class="lock-icon" :icon="activeTwo ? 'lock-fill' : 'lock'"></b-icon>
        <input
          @focus="activeTwo = true"
          @blur="checkTwo"
          autocomplete="off"
          type="password"
          placeholder="Password"
          @input="activeTwo = true"
          v-model="form.password"
        />
      </div>
      <div class="btn-area w-100">
        <button class="login-btn">SUBMIT</button>
      </div>
      <span class="text-center forgot">Forgot your pasword ?</span>
    </div>
    <div class="text-center w-100 h-100 d-flex align-items-center justify-content-center bottom">
      <div class="forgot p-0">Dont have one now</div>
      <a @click.prevent="mount" class="pl-1" href>Register</a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      activeTwo: false,
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    mount() {
      this.$router.push({ name: "Register" });
    },
    check() {
      if (this.form.email !== "") {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    checkTwo() {
      if (this.form.password !== "") {
        this.activeTwo = true;
      } else {
        this.activeTwo = false;
      }
    }
  },
  mounted() {
    if (this.$route.name == "Login") {
      setTimeout(() => {
        let myElements = document.querySelectorAll(".modal-backdrop");
        for (let i = 0; i < myElements.length; i++) {
          myElements[i].style.background = "#1b1b1b";
          myElements[i].style.opacity = 1;
          myElements[i].style.boxSizing = "border-box";
          myElements[i].style.border = "solid 10px transparent";
        }
        let myElements2 = document.querySelectorAll(".modal-content");
        for (let i = 0; i < myElements2.length; i++) {
          myElements2[i].style.background = "white";
          myElements2[i].style.color = "#1b1b1b";
        }
      }, 0);
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 480px;

  box-shadow: 0 7px 64px 0 rgba(16, 32, 63, 0.247);
  /* box-shadow: 0 7px 64px 0 rgba(19, 36, 78, 0.07); */
}

.login input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #1b1b1b;
  background: transparent;
  outline: none;
  color: #1b1b1b;
  font-size: 16px;
  margin-top: 0.5rem;
  width: 100%;
  padding-left: 30px;
}
.login-cont {
  position: relative;
  display: flex;
  align-items: center;
}
.person-icon {
  position: absolute;
  bottom: 4px;
  font-size: 22px;
}
.lock-icon {
  position: absolute;
  bottom: 4px;
  font-size: 20px;
}
/* .img-cont {
  border: 20px solid #1b1b1b;
  padding: 25px;
} */
.login-header {
  font-size: 2.3rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
}
.input-title {
  font-weight: 300;
  font-size: 15px;
}
.forgot {
  opacity: 0.6;
  font-size: 13px;
  padding-top: 16px;
}
.btn-area {
  margin-top: 40px;
}
.login-btn {
  color: white;
  background: #1b1b1b;
  border: 0;
  outline: 0;
  height: 44px;
  width: 100%;
  font-size: 16px;
}
.bottom {
  border-top: 1px solid #1b1b1b59;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  background-color: transparent;
}
</style>
