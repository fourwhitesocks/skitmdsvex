
import { faqs
} from "./_faqs";

    export async function get() {
      return {
        status: 200,
        body: JSON.stringify(faqs),
  };
}