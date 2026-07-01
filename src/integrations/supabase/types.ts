export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      gallery_images: {
        Row: {
          alt_text: string
          caption: string | null
          category: string | null
          created_at: string
          display_order: number
          id: string
          image_url: string
          is_visible: boolean
          linked_project_id: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          alt_text?: string
          caption?: string | null
          category?: string | null
          created_at?: string
          display_order?: number
          id?: string
          image_url: string
          is_visible?: boolean
          linked_project_id?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          alt_text?: string
          caption?: string | null
          category?: string | null
          created_at?: string
          display_order?: number
          id?: string
          image_url?: string
          is_visible?: boolean
          linked_project_id?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_images_linked_project_id_fkey"
            columns: ["linked_project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          location: string | null
          message: string | null
          mobile: string
          reference_image_url: string | null
          service_required: string
          source_page: string | null
          status: Database["public"]["Enums"]["lead_status"]
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          location?: string | null
          message?: string | null
          mobile: string
          reference_image_url?: string | null
          service_required: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          location?: string | null
          message?: string | null
          mobile?: string
          reference_image_url?: string | null
          service_required?: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string | null
          cover_image_alt: string | null
          cover_image_url: string | null
          created_at: string
          description: string | null
          display_order: number
          id: string
          is_visible: boolean
          location: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          cover_image_alt?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          is_visible?: boolean
          location?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          cover_image_alt?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          is_visible?: boolean
          location?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string
          display_order: number
          icon: string | null
          id: string
          image_alt: string | null
          image_url: string | null
          is_visible: boolean
          long_description: string | null
          short_description: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          icon?: string | null
          id?: string
          image_alt?: string | null
          image_url?: string | null
          is_visible?: boolean
          long_description?: string | null
          short_description?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          icon?: string | null
          id?: string
          image_alt?: string | null
          image_url?: string | null
          is_visible?: boolean
          long_description?: string | null
          short_description?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_sections: {
        Row: {
          body: string | null
          cta_href: string | null
          cta_label: string | null
          extra: Json | null
          eyebrow: string | null
          heading: string | null
          id: string
          image_alt: string | null
          image_url: string | null
          section_key: string
          subheading: string | null
          updated_at: string
        }
        Insert: {
          body?: string | null
          cta_href?: string | null
          cta_label?: string | null
          extra?: Json | null
          eyebrow?: string | null
          heading?: string | null
          id?: string
          image_alt?: string | null
          image_url?: string | null
          section_key: string
          subheading?: string | null
          updated_at?: string
        }
        Update: {
          body?: string | null
          cta_href?: string | null
          cta_label?: string | null
          extra?: Json | null
          eyebrow?: string | null
          heading?: string | null
          id?: string
          image_alt?: string | null
          image_url?: string | null
          section_key?: string
          subheading?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          address: string | null
          brand_name: string
          contact_email: string
          contact_phone: string
          country: string | null
          email_notifications_enabled: boolean
          facebook_url: string | null
          form_privacy_text: string
          form_success_message: string
          google_maps_embed: string | null
          id: number
          instagram_url: string | null
          locality: string | null
          notify_email: string
          notify_whatsapp: string
          region: string | null
          seo_default_description: string | null
          seo_default_title: string | null
          seo_og_image_alt: string | null
          seo_og_image_url: string | null
          tagline: string | null
          updated_at: string
          whatsapp_notifications_enabled: boolean
          whatsapp_number: string
          whatsapp_webhook_url: string | null
          youtube_url: string | null
        }
        Insert: {
          address?: string | null
          brand_name?: string
          contact_email?: string
          contact_phone?: string
          country?: string | null
          email_notifications_enabled?: boolean
          facebook_url?: string | null
          form_privacy_text?: string
          form_success_message?: string
          google_maps_embed?: string | null
          id?: number
          instagram_url?: string | null
          locality?: string | null
          notify_email?: string
          notify_whatsapp?: string
          region?: string | null
          seo_default_description?: string | null
          seo_default_title?: string | null
          seo_og_image_alt?: string | null
          seo_og_image_url?: string | null
          tagline?: string | null
          updated_at?: string
          whatsapp_notifications_enabled?: boolean
          whatsapp_number?: string
          whatsapp_webhook_url?: string | null
          youtube_url?: string | null
        }
        Update: {
          address?: string | null
          brand_name?: string
          contact_email?: string
          contact_phone?: string
          country?: string | null
          email_notifications_enabled?: boolean
          facebook_url?: string | null
          form_privacy_text?: string
          form_success_message?: string
          google_maps_embed?: string | null
          id?: number
          instagram_url?: string | null
          locality?: string | null
          notify_email?: string
          notify_whatsapp?: string
          region?: string | null
          seo_default_description?: string | null
          seo_default_title?: string | null
          seo_og_image_alt?: string | null
          seo_og_image_url?: string | null
          tagline?: string | null
          updated_at?: string
          whatsapp_notifications_enabled?: boolean
          whatsapp_number?: string
          whatsapp_webhook_url?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_name: string
          author_role: string | null
          avatar_alt: string | null
          avatar_url: string | null
          created_at: string
          display_order: number
          id: string
          is_visible: boolean
          location: string | null
          quote: string
          rating: number | null
          updated_at: string
        }
        Insert: {
          author_name: string
          author_role?: string | null
          avatar_alt?: string | null
          avatar_url?: string | null
          created_at?: string
          display_order?: number
          id?: string
          is_visible?: boolean
          location?: string | null
          quote: string
          rating?: number | null
          updated_at?: string
        }
        Update: {
          author_name?: string
          author_role?: string | null
          avatar_alt?: string | null
          avatar_url?: string | null
          created_at?: string
          display_order?: number
          id?: string
          is_visible?: boolean
          location?: string | null
          quote?: string
          rating?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
      lead_status:
        | "new"
        | "contacted"
        | "site_visit_scheduled"
        | "quotation_sent"
        | "converted"
        | "closed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
      lead_status: [
        "new",
        "contacted",
        "site_visit_scheduled",
        "quotation_sent",
        "converted",
        "closed",
      ],
    },
  },
} as const
