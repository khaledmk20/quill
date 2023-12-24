import BillingForm from "@/app/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe";

async function Page() {
  const subscriptionPlan = await getUserSubscriptionPlan();
  return <BillingForm subscriptionPlan={subscriptionPlan} />;
}

export default Page;
