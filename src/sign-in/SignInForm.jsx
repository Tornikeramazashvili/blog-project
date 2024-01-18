function SignInForm() {
  return (
    <>
      <div className="hero min-h-screen0 max-w-5xl mx-auto mt-20 px-2">
        <div className="shrink-0 w-full max-w-sm border-2 white-black rounded-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
