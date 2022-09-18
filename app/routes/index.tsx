import globalStyles from '~/Styles/global.css'
import {Link} from '@remix-run/react';

export default function Index() {
  return (
    <>
    <main>
    <h1> Unlimited movies, TV shows and more </h1>
            <h3 className="text-red-500 hover:text-blue-500"> Watch anywhere. Cancel anytime </h3>
            <p> Ready to watch? Enter your email to create or restart your membership. </p>
            <div>
                <form>
                <input id="email" type='email' name='email'placeholder="Email Address" autoComplete="email"/>
                <Link to='/signUp'> Get Started </Link>
                </form>
            </div>
    </main>
    <section>
      <h1> Title of section </h1>
      <p> small paragraph </p>
      </section>
    <section>
      <h1> Title of section </h1>
      <p> small paragraph </p>
      </section>
    <section>
      <h1> Title of section </h1>
      <p> small paragraph </p>
      </section>
    <section>
      <h1> Title of section </h1>
      <p> small paragraph </p>
      </section>
      {/* dropdown menu goes here */}
      {/* have to figure out the footer layout here */}
    </>
  );
}
